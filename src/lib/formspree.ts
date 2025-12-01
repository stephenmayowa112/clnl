/**
 * Formspree integration utilities
 */

export interface FormspreeConfig {
  quoteFormId: string;
  contactFormId: string;
}

export interface FormspreeResponse {
  ok: boolean;
  errors?: Array<{ field: string; message: string }>;
}

/**
 * Submit form data to Formspree
 */
export async function submitToFormspree(
  formId: string,
  data: Record<string, unknown>
): Promise<FormspreeResponse> {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { ok: true };
    } else {
      const errorData = await response.json();
      return {
        ok: false,
        errors: errorData.errors || [{ field: 'general', message: 'Submission failed' }],
      };
    }
  } catch {
    return {
      ok: false,
      errors: [{ field: 'general', message: 'Network error. Please try again.' }],
    };
  }
}
