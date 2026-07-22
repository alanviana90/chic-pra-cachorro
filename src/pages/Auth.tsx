import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AuthPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Área administrativa</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 text-center">Em breve você poderá gerenciar os depoimentos aqui.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={() => navigate("/")}>Voltar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
