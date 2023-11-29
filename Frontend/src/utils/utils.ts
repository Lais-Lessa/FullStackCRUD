export const formatPhoneNumberInput = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
  
    const truncatedValue = numericValue.slice(0, 11);
  
    let formattedValue = truncatedValue;
  
    if (truncatedValue.length > 2) {
      formattedValue = `(${truncatedValue.slice(0, 2)}`;
  
      if (truncatedValue.length > 2) {
        formattedValue += `) ${truncatedValue.slice(2, 7)}`;
      }
  
      if (truncatedValue.length > 7) {
        formattedValue += `-${truncatedValue.slice(7)}`;
      }
    }
  
    return formattedValue;
  };
  