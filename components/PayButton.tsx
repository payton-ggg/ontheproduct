// components/PayButton.tsx

import React from 'react';

const PayButton: React.FC = () => {
  const handlePayClick = async () => {
    try {
      const response = await fetch('/api/payments'); // Corrected route
      const { approvalUrl } = await response.json();
      window.location.href = approvalUrl;
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <button onClick={handlePayClick}>
      Pay with PayPal
    </button>
  );
};

export default PayButton;
