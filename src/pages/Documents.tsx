import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Briefcase, Users, Search, PlusCircle, FileSignature } from "lucide-react";
import { ReactNode, useState } from "react";
import { DocumentFormModal } from "@/components/document/DocumentFormModal";

type DocumentType = {
  name: string;
  count: number;
  icon: ReactNode;
};

const documentTypes: DocumentType[] = [
  { name: "Contratos", count: 12, icon: <FileSignature className="h-6 w-6 text-muted-foreground" /> },
  { name: "Procurações", count: 5, icon: <Briefcase className="h-6 w-6 text-muted-foreground" /> },
  { name: "Contrato de Funcionário", count: 8, icon: <Users className="h-6 w-6 text-muted-foreground" /> },
  { name: "Contratos de Freelancer", count: 15, icon: <FileText className="h-6 w-6 text-muted-foreground" /> },
];

const Documents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocType, setSelectedDocType] = useState("");

  const handleCardClick = (docTypeName: string) => {
    setSelectedDocType(docTypeName);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#1A1A1A]">Documentos</h1>
        <p className="text-[#666666] mt-2">
          Gerencie seus documentos e modelos de forma organizada.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar documentos..."
            className="pl-8 w-full"
          />
        </div>
        <Button className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          Criar Novo Documento
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {documentTypes.map((docType) => (
          <Card 
            key={docType.name} 
            className="hover:bg-accent hover:cursor-pointer transition-colors"
            onClick={() => handleCardClick(docType.name)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#666666]">
                {docType.name}
              </CardTitle>
              {docType.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#333333]">{docType.count}</div>
              <p className="text-xs text-muted-foreground">arquivos</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <DocumentFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        documentType={selectedDocType}
      />
    </div>
  );
};

export default Documents;