// Waitlist API service for production
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://prompt-theory-api.onrender.com';

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

export const waitlistApi = {
  /**
   * Subscribe email to waitlist
   * @param {string} email - User email address
   * @param {string} source - Source attribution (default: 'landing_page')
   * @returns {Promise<{success: boolean, message: string, isNew: boolean}>}
   */
  async subscribe(email, source = 'landing_page') {
    try {
      const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(
          data.error || 'Failed to join waitlist',
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      // Check for CORS error
      if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
        throw new ApiError(
          'Service temporarily unavailable. Please try again in a few moments or contact support@prompttheory.dev',
          503,
          { originalError: error.message }
        );
      }

      // Network or other errors
      throw new ApiError(
        'Unable to connect. Please check your internet connection and try again.',
        0,
        { originalError: error.message }
      );
    }
  }
};

// Utility functions
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getErrorMessage = (error) => {
  if (error instanceof ApiError) {
    switch (error.status) {
      case 400:
        return 'Please enter a valid email address.';
      case 429:
        return `Too many attempts. Please try again in ${error.data?.retryAfter || 15} minutes.`;
      case 500:
        return 'Server error. Please try again in a moment.';
      case 503:
        return 'Service temporarily unavailable. Please try again later or contact support@prompttheory.dev';
      default:
        return error.message || 'Something went wrong. Please try again.';
    }
  }
  return 'Unable to connect. Please check your internet connection.';
};