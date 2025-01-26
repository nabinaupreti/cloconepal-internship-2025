async function saveFormData(formData) {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
            // "X-Collection-Name": "registration-data",
            "X-Access-Key":"$2a$10$WgNs9fJIlQmylLLmhAP4yOLunmgwcDl85UrmGXwPNQ8Q5VCgrPBjm",
            "X-Master-Key": "$2a$10$QX8qPz9XFrqNXfVO/fWyhOGQjijUVDeDnaTfx7PCkMR0KQgp48zzC",    
            "Content-Type": "application/json",
          },
        body: JSON.stringify(formData),
      });

      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Data:', errorData);
        throw new Error(errorData.message || 'Failed to save form data');
      }
  
      const data = await response.json();
      displaySavedData(data);
      showSnackbar('Form data saved successfully!', 'success');
    } catch (error) {
      console.error('Error:', error);
      showSnackbar(error.message, 'error');
    }
  }
 export default saveFormData;