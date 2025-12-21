// Example form submission function
async function submitContactForm(formData) {
  try {
    // Show loading state
    const submitButton = document.querySelector('[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "your-web3forms-access-key", // Replace with your actual key
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Contact Form Submission",
        message: formData.message,
        // Optional: Add other fields like phone, company, etc.
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // Success
      showSuccessMessage("Thank you! Your message has been sent successfully.");
      // Reset form
      document.querySelector("form").reset();
    } else {
      // Error from Web3Forms
      throw new Error(result.message || "Failed to send message");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    showErrorMessage(
      "Server error occurred. Please try again in a few minutes."
    );
  } finally {
    // Reset button state
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
}

// If using Nuxt/Vue, you might use this approach:
async function submitForm() {
  try {
    isSubmitting.value = true;

    const result = await $fetch("/api/contact", {
      method: "POST",
      body: {
        access_key: "your-web3forms-access-key",
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    });

    if (result.success) {
      showSuccess("Message sent successfully!");
      resetForm();
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Submission error:", error);
    showError("Failed to send message. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
}

function showSuccessMessage(message) {
  // Implement your success message display
  alert(message); // Replace with your UI notification
}

function showErrorMessage(message) {
  // Implement your error message display
  alert(message); // Replace with your UI notification
}
