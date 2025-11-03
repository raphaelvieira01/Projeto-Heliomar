// We are defining the type for the contract data here.
// This ensures that the template receives all the necessary information.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ContractTemplateProps {
  data: any;
}

export const ContractTemplate = ({ data }: ContractTemplateProps) => {
  return (
    <div className="prose prose-sm max-w-none p-8 bg-white text-black">
      <h2 className="text-center text-xl font-bold mb-8">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE SEGURO</h2>
      
      <h3 className="font-bold mt-6 text-base">IDENTIFICAÇÃO DAS PARTES CONTRATANTES</h3>

      <div className="mt-4 text-sm">
        <p>
          <strong>CONTRATANTE:</strong> {data.fullName}, {data.maritalStatus}, {data.occupation}, 
          portador(a) da cédula de identidade R.G. nº {data.rg} e inscrito(a) no CPF/MF sob o nº {data.cpf}, 
          residente e domiciliado(a) na {data.street}, nº {data.number}, Bairro {data.neighborhood}, 
          CEP {data.cep}, Cidade de {data.city}, Estado de {data.state}.
        </p>
      </div>

      <div className="mt-4 text-sm">
        <p>
          <strong>CONTRATADA:</strong> SEGURADORA S.A., sociedade com sede na cidade de São Paulo, 
          Estado de São Paulo, na Rua das Seguradoras, nº 123, inscrita no CNPJ/MF sob o nº 00.000.000/0001-00, 
          neste ato representada na forma de seu Contrato Social.
        </p>
      </div>

      <p className="mt-6">
        As partes acima identificadas têm, entre si, justo e acertado o presente Contrato de Prestação de Serviços de Seguro, 
        que se regerá pelas cláusulas seguintes e pelas condições descritas no presente.
      </p>
      
      <h3 className="font-bold mt-6 text-base">CLÁUSULA PRIMEIRA - DO OBJETO DO CONTRATO</h3>
      <p>
        O objeto do presente contrato é a cobertura de riscos especificados na
        apólice, de acordo com o plano contratado pelo CONTRATANTE, cujas
        especificações e limites de indenização estão detalhados nas Condições
        Particulares do seguro.
      </p>

      <h3 className="font-bold mt-6 text-base">CLÁUSULA SEGUNDA - DA VIGÊNCIA</h3>
      <p>
        O presente contrato terá vigência de 12 (doze) meses, a contar da data
        de sua assinatura, podendo ser renovado automaticamente por iguais
        períodos, salvo manifestação em contrário de uma das partes com antecedência mínima de 30 (trinta) dias.
      </p>

      <h3 className="font-bold mt-6 text-base">CLÁUSULA TERCEIRA - DO PREÇO E DAS CONDIÇÕES DE PAGAMENTO</h3>
      <p>
        O CONTRATANTE pagará à CONTRATADA, a título de prêmio do seguro, o valor estipulado na apólice, 
        nas datas e formas de pagamento ali especificadas. A falta de pagamento de qualquer parcela do prêmio 
        nos respectivos vencimentos poderá acarretar a suspensão ou o cancelamento do seguro, 
        conforme as normas legais vigentes.
      </p>

      <h3 className="font-bold mt-6 text-base">CLÁUSULA QUARTA - DAS OBRIGAÇÕES</h3>
      <p>
        <strong>Do CONTRATANTE:</strong> Prestar informações verdadeiras e completas, pagar o prêmio nas datas acordadas, 
        e comunicar à CONTRATADA, logo que saiba, qualquer incidente que possa agravar o risco coberto.
      </p>
      <p>
        <strong>Da CONTRATADA:</strong> Pagar a indenização devida em caso de sinistro coberto pela apólice, 
        dentro dos prazos legais, e prestar todas as informações necessárias ao CONTRATANTE sobre o andamento dos processos.
      </p>

      <h3 className="font-bold mt-6 text-base">CLÁUSULA QUINTA - DA RESCISÃO</h3>
      <p>
        O presente contrato poderá ser rescindido por qualquer uma das partes, mediante comunicação prévia e por escrito, 
        com antecedência de 30 (trinta) dias, observadas as disposições legais e contratuais aplicáveis à devolução de prêmios.
      </p>

      <h3 className="font-bold mt-6 text-base">CLÁUSULA SEXTA - DO FORO</h3>
      <p>
        Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o foro da comarca de {data.city}, {data.state}.
      </p>

      <p className="mt-8 text-center">
        E, por estarem assim justas e contratadas, as partes assinam o presente
        instrumento em 2 (duas) vias de igual teor e forma, na presença das testemunhas abaixo.
      </p>

      <div className="mt-24 flex justify-around">
        <div className="text-center">
          <p className="border-t border-black w-64 mx-auto pt-2">SEGURADORA S.A.</p>
        </div>
        <div className="text-center">
          <p className="border-t border-black w-64 mx-auto pt-2">{data.fullName}</p>
        </div>
      </div>
    </div>
  );
};