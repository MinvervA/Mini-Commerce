import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputUsernameMessage, setInputUsernameMessage] = useState(false);
  const [inputPasswordMessage, setInputPasswordMessage] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    const checkUsername = username.length < 4;
    const checkpassword = password.length < 6;

    if (checkUsername) return alert("Username needs to be 3 characters or more");
    if (checkpassword) return alert("Password needs to be 6 characters or more");

    alert(`${username} dan ${password}`);
  };

  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[80vh]">
      <form onSubmit={handleLogin} className="max-w-[540px] w-full">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => {
                  if (e.target.value.length < 3) {
                    setInputUsernameMessage("Username needs to be 3 characters or more");
                  } else {
                    setInputUsernameMessage("");
                  }
                  setUsername(e.target.value);
                }}
              />
              <p className="text-sm mt-2 text-red-500">{inputUsernameMessage}</p>
            </div>
            <div className="">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={isChecked ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  if (e.target.value.length < 6) {
                    setInputPasswordMessage("Password needs to be 6 characters or more");
                  } else {
                    setInputPasswordMessage("");
                  }
                  setPassword(e.target.value);
                }}
              />
              <p className="text-sm mt-2 text-red-500">{inputPasswordMessage}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="show-password"
                // ini merupakan event khusus yang ada di shadcn ui untuk mengambil value
                // check pada input bertipe checkbox (onCheckedChange)
                onCheckedChange={(checked) => setIsChecked(checked)}
              />
              <Label htmlFor="show-password">Show Password</Label>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col space-y-4 w-full">
              <Button type="submit">Login</Button>
              <Button variant="link">Sign up instead</Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
};
