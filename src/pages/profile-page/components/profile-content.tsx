import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { registerZodSchema } from "@/constant/register.zodSchema";
import { useUpdateUserMutation } from "@/redux/features/user/user.api";
import type { IUser } from "@/types";
import { sendResponse } from "@/utils/sendResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

const formSchema = registerZodSchema.partial();

export default function ProfileContent({ user }: { user: IUser | undefined }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email,
      name: user?.name,
      phone: user?.phone,
      ...(user?.role === "driver" && {
        vehicleInfo: {
          model: user?.vehicleInfo?.model,
          registration_no: user?.vehicleInfo?.registration_no,
        },
      }),
    },
  });

  const [update, { isLoading }] = useUpdateUserMutation();

  const onsubmit = async (data: z.infer<typeof formSchema>) => {
    if (!form.formState.isDirty) {
      return toast.error("No value changed");
    }

    await sendResponse(
      () => update({ data, email: user?.email }),
      "Profile update"
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your personal details and profile information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onsubmit)}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" type="text" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {user?.role === "driver" && (
                <div className="mt-6">
                  <h2 className="font-semibold">Vehicle Information</h2>
                  <Separator className="my-2" />
                  <div className="flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="vehicleInfo.model"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Model</FormLabel>
                        <FormControl>
                          <Input placeholder="Model Number" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehicleInfo.registration_no"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Registration No</FormLabel>
                        <FormControl>
                          <Input placeholder="Registration No" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            <Button
              className="mt-4 w-full md:w-fit"
              disabled={isLoading || !form.formState.isDirty}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
