import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CreateOrderData {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryAddress: string;
  items: OrderItem[];
  totalAmount: number;
  notes?: string;
}

interface CreateOrderResult {
  success: boolean;
  trackingCode?: string;
  orderId?: string;
  error?: string;
}

export const useCreateOrder = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const createOrder = async (data: CreateOrderData): Promise<CreateOrderResult> => {
    setIsCreating(true);

    try {
      // Calculate estimated delivery (35 mins from now for ready-made items)
      const hasReadyMade = data.items.some(item => 
        item.id.includes("espresso") || 
        item.id.includes("cappuccino") || 
        item.id.includes("latte") || 
        item.id.includes("americano") || 
        item.id.includes("mocha") || 
        item.id.includes("cold-brew")
      );

      const estimatedDelivery = hasReadyMade
        ? new Date(Date.now() + 35 * 60000).toISOString()
        : new Date(Date.now() + 3 * 24 * 60 * 60000).toISOString(); // 3 days

      // Generate tracking code on client side as a fallback
      const generateCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = 'CC-';
        for (let i = 0; i < 6; i++) {
          code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
      };

      const { data: order, error } = await supabase
        .from("orders")
        .insert({
          customer_name: data.customerName,
          customer_phone: data.customerPhone,
          customer_email: data.customerEmail || null,
          delivery_address: data.deliveryAddress,
          items: data.items as unknown as import("@/integrations/supabase/types").Json,
          total_amount: data.totalAmount,
          status: "confirmed",
          estimated_delivery_time: estimatedDelivery,
          notes: data.notes || null,
          tracking_code: generateCode(),
        })
        .select("id, tracking_code")
        .single();

      if (error) throw error;

      toast({
        title: "Order Placed Successfully!",
        description: `Your tracking code is: ${order.tracking_code}`,
      });

      return {
        success: true,
        trackingCode: order.tracking_code,
        orderId: order.id,
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create order";
      toast({
        title: "Order Failed",
        description: errorMessage,
        variant: "destructive",
      });

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsCreating(false);
    }
  };

  return { createOrder, isCreating };
};
