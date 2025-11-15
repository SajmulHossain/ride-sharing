import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useUpdateUserMutation } from "@/redux/features/user/user.api";
import { sendResponse } from "@/utils/sendResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  emergencyContact: z
    .string("Phone Number must be string")
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    }),
});

const UpdateSosInfo = () => {
    const {data:user} = useGetMeQuery(undefined);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emergencyContact: user?.emergencyContact || ""
        }
    })

    
  const [update, { isLoading }] = useUpdateUserMutation();

  const onsubmit = async (data: z.infer<typeof formSchema>) => {
    if (!form.formState.isDirty) {
      return toast.error("No value changed");
    }

    await sendResponse(
      () => update({ data, email: user?.email }),
      "Emergency Contact update"
    );
  };

  return (
    <section className="section">
      <Card>
        <CardHeader>
          <CardTitle>Update Your Emergency Contact</CardTitle>
          <CardDescription>This is for ensuring you safety</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)}>
              <div>
                <FormField
                  control={form.control}
                  name="emergencyContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Emergency Contact"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
    </section>
  );
};

export default UpdateSosInfo;