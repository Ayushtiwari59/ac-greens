import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !phone) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const whatsappMessage =
      `*New Enquiry - AC GREENS*%0A%0A` +
      `👤Name: ${name}%0A` +
      `📞Phone: ${phone}%0A` +
      `🪟Product: ${product}%0A` +
      `📝Requirement: ${message}`;

    window.open(
      `https://wa.me/916393514591?text=${whatsappMessage}`,
      "_blank"
    );
  }; 
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          background: "#000",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "10px",
            }}
          />

          <div>
            <h2 style={{ margin: 0, color: "#25D366" }}>AC GREENS</h2>
            <p style={{ margin: 0, fontSize: "12px" }}>
              Doors & Windows Solutions
            </p>
          </div>
        </div>

        <nav>
          <a href="#home" style={navStyle}>Home</a>
          <a href="#services" style={navStyle}>Services</a>
          <a href="#gallery" style={navStyle}>Gallery</a>
          <a href="#contact" style={navStyle}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#111827",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#25D366",
          }}
        >
          AC GREENS
        </h1>

        <h2>DOORS & WINDOWS SOLUTIONS</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            fontSize: "22px",
          }}
        >
          Premium PVC & UPVC Doors, Windows, Wall Panels and Interior Solutions
          for Homes, Offices and Commercial Spaces.
        </p>

        <div>
          <a href="tel:6393514591" style={btnStyle}>
            📞 Call Now
          </a>

          <a
            href="https://wa.me/916393514591"
            target="_blank"
            rel="noreferrer"
            style={{
              ...btnStyle,
              background: "#128C7E",
              marginLeft: "15px",
            }}
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Our Services</h2>

        <div style={cardContainer}>
          <div style={cardStyle}>
            <h3>PVC Doors</h3>
            <p>Stylish and durable PVC door solutions.</p>
          </div>

          <div style={cardStyle}>
            <h3>UPVC Windows</h3>
            <p>Energy-efficient modern UPVC windows.</p>
          </div>

          <div style={cardStyle}>
            <h3>Wall Panels</h3>
            <p>Decorative and waterproof wall panels.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          background: "#000",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Why Choose Us?</h2>

        <div style={cardContainer}>
          <div>
            <h3>✅ Premium Quality</h3>
            <p>High-quality PVC & UPVC products.</p>
          </div>

          <div>
            <h3>✅ Expert Installation</h3>
            <p>Professional installation service.</p>
          </div>

          <div>
            <h3>✅ Affordable Pricing</h3>
            <p>Best value for money.</p>
          </div>

          <div>
            <h3>✅ Custom Designs</h3>
            <p>Customized solutions for every customer.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Our Projects</h2>

        <div style={cardContainer}>
          <img src="/images/project1.jpg" alt="PVC Door" style={imgStyle} />
          <img src="/images/project2.jpg" alt="UPVC Window" style={imgStyle} />
          <img src="/images/project3.jpg" alt="Wall Panel" style={imgStyle} />
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        style={{
          padding: "80px 20px",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginBottom: "30px" }}>
          Get Free Quote
        </h2>

        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          />
          <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          />

          <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={inputStyle}
          >
            <option value="">Select Product</option>
            <option value="PVC Door">PVC Door</option>
            <option value="UPVC Window">UPVC Window</option>
            <option value="Wall Panel">Wall Panel</option>
            <option value="Partition">Partition</option>
          </select>

          <textarea
            rows="5"
            placeholder="Your Requirement"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
          />

          <button
          style={submitBtn}
          onClick={handleSubmit}
          >
            Submit Enquiry
          </button>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          background: "#111827",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <h2 style={{ fontSize: "50px" }}>Contact Us</h2>

        <p>📞 6393514591</p>

        <p>AC GREENS DOORS AND WINDOWS</p>

        <p>Premium PVC & UPVC Solutions</p>

        <h3>Address</h3>
        <p>AC GREENS DOORS AND WINDOWS</p>
        <p>
          Building No./Flat No.: Gata No. 106 <br />
          Road/Street: Laskarpur Road <br />
          Locality/Sub Locality: Lashkarpur <br />
          City/Town/Village: Mishrikh <br />
          District: Sitapur <br />
          State: Uttar Pradesh <br />
          PIN Code: 261401
        </p>
        <a
        href="https://www.google.com/maps/search/?api=1&query=Gata+No+106+Laskarpur+Road+Lashkarpur+Mishrikh+Sitapur+Uttar+Pradesh+261401"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "15px",
          background: "#25D366",
          color: "white",
          padding: "12px 25px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        📍 Open Location in Google Maps
      </a>
      </section>
    </div>
  );
}

const navStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
};

const btnStyle = {
  background: "#25D366",
  color: "white",
  padding: "15px 25px",
  borderRadius: "8px",
  textDecoration: "none",
};

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
  marginTop: "40px",
};

const cardStyle = {
  width: "300px",
  border: "1px solid #444",
  padding: "25px",
  borderRadius: "12px",
};

const imgStyle = {
  width: "300px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "10px",
};

const inputStyle = {
  padding: "15px",
  borderRadius: "8px",
  border: "none",
};

const submitBtn = {
  background: "#25D366",
  color: "white",
  padding: "15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
};

export default App;