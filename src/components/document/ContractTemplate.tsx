// We are defining the type for the contract data here.
// This ensures that the template receives all the necessary information.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ContractTemplateProps {
  data: any;
}

export const ContractTemplate = ({ data }: ContractTemplateProps) => {
  return (
    <div className="prose prose-sm max-w-none p-4">
      <h2 className="text-center text-lg font-bold mb-6">CONTRATO DE SEGURO</h2>
      
      <p>
        Pelo presente instrumento particular, de um lado, a SEGURADORA S.A.,
        sociedade com sede na cidade de São Paulo, Estado de São Paulo, na Rua
        das Seguradoras, nº 123, inscrita no CNPJ/MF sob o nº 00.000.000/0001-00,
        doravante denominada simplesmente SEGURADORA, e de outro lado:
      </p>

      <h3 className="font-bold mt-6 text-base">I – IDENTIFICAÇÃO DO CONTRATANTE (SEGURADO)</h3>
      <div className="mt-2 text-sm">
        <p><strong>Nome completo:</strong> {data.fullName}</p>
        <p><strong>Data de nascimento:</strong> {data.birthDate}</p>
        <p><strong>Estado civil:</strong> {data.maritalStatus}</p>
        <p><strong>Ocupação:</strong> {data.occupation}</p>
        <p><strong>CPF:</strong> {data.cpf}</p>
        <p><strong>RG:</strong> {data.rg}</p>
        <p className="mt-2">
          <strong>Endereço:</strong> {data.street}, {data.number}<br />
          <strong>Bairro:</strong> {data.neighborhood}<br />
          <strong>Cidade:</strong> {data.city} - <strong>Estado:</strong> {data.state}<br />
          <strong>CEP:</strong> {data.cep}
        </p>
      </div>

      <p className="mt-6">
        As partes têm entre si, justo e contratado, o presente Contrato de
        Seguro, que se regerá pelas cláusulas e condições a seguir, bem como
        pelas Condições Gerais do Seguro, que são parte integrante deste
        instrumento.
      </p>
      
      <h3 className="font-bold mt-6 text-base">II – OBJETO DO SEGURO</h3>
      <p>
        O objeto do presente contrato é a cobertura de riscos especificados na
        apólice, de acordo com o plano contratado pelo SEGURADO, cujas
        especificações e limites de indenização estão detalhados nas Condições
        Particulares.
      </p>

      <h3 className="font-bold mt-6 text-base">III – VIGÊNCIA</h3>
      <p>
        O presente contrato terá vigência de 12 (doze) meses, a contar da data
        de sua assinatura, podendo ser renovado automaticamente por iguais
        períodos, salvo manifestação em contrário de uma das partes.
      </p>

      <p className="mt-8 text-center">
        E, por estarem assim justas e contratadas, as partes assinam o presente
        instrumento em 2 (duas) vias de igual teor e forma.
      </p>

      <div className="mt-16 flex justify-around">
        <div className="text-center">
          <p className="border-t border-foreground w-48 mx-auto">SEGURADORA S.A.</p>
        </div>
        <div className="text-center">
          <p className="border-t border-foreground w-48 mx-auto">{data.fullName}</p>
        </div>
      </div>
    </div>
  );
};