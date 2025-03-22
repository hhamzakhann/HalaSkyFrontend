import { useForgotPassword } from "@/app/_contexts/ForgotPasswordContext";
import { generateToken } from "@/app/_lib/action";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { toast } from "react-hot-toast";
import ButtonCustom from "../Button";

export default function InitailForgotPassForm() {
  const { setEmail } = useForgotPassword();
  const [isPending, startTransition] = useTransition();

  const handleSubmittion = function (formData) {
    startTransition(async () => {
      const resp = await generateToken(formData);
      if (resp.status) {
        toast.success(resp.message);
        setEmail(formData.get("email"));
      }
      if (!resp.status) toast.error(resp.error);
    });
  };
  return (
    <form
      action={(formData) => handleSubmittion(formData)}
      className="space-y-6"
    >
      <Input placeholder="Email" type="email" name="email" />
      <ButtonCustom type="accent" htmlType="submit" isPending={isPending}>
        Reset Password
      </ButtonCustom>
    </form>
  );
}
