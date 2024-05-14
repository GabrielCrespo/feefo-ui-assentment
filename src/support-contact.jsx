import './support-contact.css';

// Componente SupportContact
const SupportContact = () => {
  return (
    <div className="support-contact-details">
      <div className="contact-info">
        <h4 style={{ marginBottom: '5px' }}>Support</h4>
        <div className="contact-details">
          <div className="support-icon">S</div> {/* Adicionando o quadrado com a letra "S" dentro */}
          <p style={{ marginRight: '10px', marginLeft: '10px' }}>support@feefo.com</p>
          <p>020 3362 4208</p>
        </div>
      </div>
    </div>
  );
}


export default SupportContact;