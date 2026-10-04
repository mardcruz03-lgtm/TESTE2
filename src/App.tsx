import SalesLanding from "./pages/SalesLanding";
import EcosystemPage from "./pages/EcosystemPage";
import ThankYouPage from "./pages/ThankYouPage";
import TermsPage from "./pages/TermsPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  switch (pathname) {
    case "/obrigado":
      return <ThankYouPage />;
    case "/ecossistema":
      return <EcosystemPage />;
    case "/termos":
      return <TermsPage />;
    case "/checkout":
      return <CheckoutPage />;
    case "/":
    default:
      return <SalesLanding />;
  }
}

