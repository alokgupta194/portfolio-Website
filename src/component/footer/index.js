import '../footer/style.scss'




export default function Footer() {
  return (
    <footer>
      <div className="container-fluid" id="footer">
        <div className="row">
          <div className="col-12">
            &copy; copyright {new Date().getFullYear()} : All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
