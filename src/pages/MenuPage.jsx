
import Navbar from '../components/Navbar';
import PageHero from '../pages/PageHero';
import Menu from '../components/Menu'; 
import Footer from '../components/Footer';

function MenuPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        <Navbar />

        <PageHero title="Food Menu" />
      </div>
      <Menu />
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default MenuPage;