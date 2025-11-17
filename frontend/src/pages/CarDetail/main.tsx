import { useParams } from 'react-router-dom';

export const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Detalhes do Carro</h1>
      <p className="text-gray-600">Detalhes do carro ID: {id}</p>
      <p className="text-gray-600 mt-4">Formulário de contato será implementado aqui</p>
    </div>
  );
};

export default CarDetailPage;
