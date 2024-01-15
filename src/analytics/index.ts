export type AnalyticsEvent = {
  type: 'page_viewed';
  id: string;
};

export const sendAnalyticsEvent = async (event: AnalyticsEvent) => {
  const response = await fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'content-type': 'application/json',
    },
  });

  return response.json();
};
