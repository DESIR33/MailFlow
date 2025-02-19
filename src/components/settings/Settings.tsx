import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSignOut = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      navigate("/signin");
    }
    setIsLoading(false);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Password updated successfully");
      setNewPassword("");
    }
    setIsLoading(false);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto ">
      <div>
        <h1 className="text-4xl leading-8 font-black text-left animate-pulse flex justify-start items-start">
          Settings
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your account settings and preferences
        </p>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              View and manage your account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={user?.email} disabled />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Update your password to keep your account secure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert className="bg-green-50 text-green-700 border-green-200">
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sign Out</CardTitle>
            <CardDescription>Sign out of your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={handleSignOut}
              disabled={isLoading}
            >
              {isLoading ? "Signing out..." : "Sign Out"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
