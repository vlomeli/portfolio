import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {year} Victor Lomeli Ponce</p>
      </div>
    </footer>
  );
}

export default Footer;
