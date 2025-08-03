import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart2, Settings, Wrench, PackageSearch, DollarSign } from "lucide-react";
import { useState } from "react";

export default function InsightOpsApp() {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [formData, setFormData] = useState({
    fecha: "",
    linea: "",
    turno: "",
    unidades: ""
  });
  const [datosProduccion, setDatosProduccion] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatosProduccion((prev) => [...prev, formData]);
    setFormData({ fecha: "", linea: "", turno: "", unidades: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-800 tracking-tight">InsightOps</h1>
      <Tabs defaultValue="dashboard" onValueChange={setSelectedTab}>
        <TabsList
