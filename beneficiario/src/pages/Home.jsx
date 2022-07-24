import Beneficiarios from '../components/Beneficiarios';
import AddBeneficiariosModal from '../components/AddBeneficiariosModal';
//import EditarBeneficiarios from '../components/EditarBeneficiarios';

export default function Home() {
    return (
      <>
      <AddBeneficiariosModal/>
    
      <Beneficiarios/>
      </>
  );
}
