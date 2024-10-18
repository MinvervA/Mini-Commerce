import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPageForm = () => {
  // const [username,setUsername]=useState("")
  const [isChecked, setIsChecked] = useState(false);

  const loginFormSchema = z.object({
    username: z
      .string()
      .min(3, "Username has to be between 3 and 16 characters")
      .max(16, "Username has to be between 3 and 16 characters"),
    password: z.string().min(8, "Password has to be more than 8 characters"),
  });

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onChange",
  });

  const handleLogin = (values) => {
    console.log(values);
    alert(`${values.username} || ${values.password}`);
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="max-w-[540px] w-full">
          <Card>
            <CardHeader>
              <p className="text-2xl font-semibold">Welcome Back!</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Password</FormLabel>
                      <FormControl>
                        <Input type={isChecked ? "text" : "password"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox" onCheckedChange={(checked) => setIsChecked(checked)} />
                  <Label className="text-sm" htmlFor="checkbox">
                    Show Password
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex flex-col gap-2">
                <Button type="submit">Login</Button>
                <Button variant="link">Sign up instead</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
