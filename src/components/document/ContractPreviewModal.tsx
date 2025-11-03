import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContractTemplate } from "./ContractTemplate";

// A "any" type is used here temporarily for the form data.
// We will define a more specific type in the next steps.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ContractPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  contractData: any;
}

export const ContractPreviewModal = ({ isOpen, onClose, onDownload, contractData }: ContractPreviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>Pré-visualização do Contrato</DialogTitle>
          <DialogDescription>
            Revise o documento gerado com as informações fornecidas.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-180px)] border rounded-md">
          {contractData && <ContractTemplate data={contractData} />}
        </ScrollArea>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
          <Button onClick={onDownload}>
            Baixar Documento
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};