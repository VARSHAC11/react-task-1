
import './App.css';


function App() {
  return (
  
      <div className="outerBox">
        <div className="innerBox">
          <div className="inner-content">
            <p className="subs">FREE</p>
            <p><span >$0</span>/month</p>
          </div>
          <div className="line"></div>
          <ul className="list-content">
             <li>Single User</li>
             <li>5GB Storage</li>
             <li>Unlimited Public Storage</li>
             <li>Community Access</li>
             <li>Unlimited Private Projects</li>
             <li>Dedicated Phone Service</li>
             <li>Free Subdomain</li>
              <li>Monthly Status Reports</li>
          </ul>
          <button className="button">BUTTON</button>
        </div>
        <div className="innerBox">
          <div className="inner-content">
            <p className="subs">PLUS</p>
            <p><span >$9</span>/month</p>
          </div>
          <div className="line"></div>
          <ul className="list2-content">
             <li className="bold-txt">5 User</li>
             <li>5GB Storage</li>
             <li>Unlimited Public Storage</li>
             <li>Community Access</li>
             <li>Unlimited Private Projects</li>
             <li>Dedicated Phone Service</li>
             <li>Free Subdomain</li>
              <li>Monthly Status Reports</li>
          </ul>
          <button className="button">BUTTON</button>
        </div>
        <div className="innerBox">
          <div className="inner-content">
            <p className="subs">PRO</p>
            <p><span >$49</span>/month</p>
          </div>
          <div className="line"></div>
          <ul className="list3-content">
             <li className="bold-txt">Unlimited User</li>
             <li>5GB Storage</li>
             <li>Unlimited Public Storage</li>
             <li>Community Access</li>
             <li>UnlimitedPrivate Projects</li>
             <li>Dedicated Phone Service</li>
             <li>Free Subdomain</li>
              <li>Monthly Status Reports</li>
          </ul>
          <button className="button">BUTTON</button>
        </div>
      </div>     
  );
}

export default App;
