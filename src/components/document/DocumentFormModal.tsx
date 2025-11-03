import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DocumentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: string;
}

export const DocumentFormModal = ({ isOpen, onClose, documentType }: DocumentFormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Gerar {documentType}</DialogTitle>
          <DialogDescription>
            Preencha as informações abaixo para gerar o documento.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {/* O formulário será adicionado aqui na próxima etapa */}
          <p className="text-center text-muted-foreground">O formulário aparecerá aqui.</p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Gerar Documento</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};