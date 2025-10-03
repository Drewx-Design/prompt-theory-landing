// Waitlist API service for Next.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prompt-theory-api.onrender.com';

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

interface SubscribeResponse {
  success: boolean;
  message: string;
  isNew: boolean;
}

export const waitlistApi = {
  async subscribe(email: string, source: string = 'web'): Promise<SubscribeResponse> {
    const requestData = {
      email: email.trim().toLowerCase(),
      source
    };

    console.log('🚀 Making API request to:', `${API_BASE_URL}/waitlist`);
    console.log('📤 Request data:', requestData);

    try {
      const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('📥 Response status:', response.status);

      const data = await response.json();
      console.log('📥 Response data:', data);

      if (!response.ok) {
        throw new ApiError(
          data.error || 'Failed to join waitlist',
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      console.error('❌ API Error:', error);

      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof TypeError) {
        console.error('❌ CORS/Network Error detected');
        throw new ApiError(
          'Service temporarily unavailable. Please try again in a few moments or contact support@prompttheory.dev',
          503,
          { originalError: (error as Error).message }
        );
      }

      throw new ApiError(
        'Unable to connect. Please check your internet connection and try again.',
        0,
        { originalError: (error as Error).message }
      );
    }
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getErrorMessage = (error: unknown): string => {
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
