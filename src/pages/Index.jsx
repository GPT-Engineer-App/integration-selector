import { Select } from "@chakra-ui/react";

const Index = () => {
  const integrations = [
    "Accelo", "Adobe", "Affinity", "Aircall", "Airtable", "Algolia", "Amazon", "Amplitude", "Anrok", "Apollo", "Apple App Store", "Asana", "Ashby", "Atlassian", "Attio", "Auth0", "AWS", "BambooHR", "Battle.net", "Bitbucket", "Bitdefender", "Blackbaud", "Boldsign", "Box", "Braintree", "Brex", "Calendly", "Chorus", "Clari Copilot", "ClickUp", "Close", "Coda", "Confluence", "Contentstack", "Deel", "DigitalOcean", "Discord", "DocuSign", "Dropbox", "Egnyte", "Entrata", "Epic Games", "Evaluagent", "Eventbrite", "Exa", "Exact Online", "Exist", "Expensify", "Facebook", "Factorial", "Figjam", "Figma", "Fitbit", "FreshBooks", "Freshdesk", "Freshsales", "Freshservice", "Front", "GitHub", "GitLab", "Gong", "Google Ads", "Google Calendar", "Google Docs", "Google Drive", "Google Mail", "Google Sheet", "Google", "Gorgias", "Greenhouse", "Gumroad", "Guru", "Gusto", "HackerRank Work", "Harvest", "Healthgorilla", "Helpscout", "Hibob", "Highlevel", "HubSpot", "Insightly", "Instagram", "Intercom", "Intuit", "Jira", "Jotform", "Keap", "Klaviyo", "Klipfolio", "Kustomer", "Lever", "Linear", "LinkedIn", "Linkhut", "Mailchimp", "Microsoft Teams", "Microsoft Tenant Specific", "Miro", "Mixpanel", "Monday", "Mural", "Nationbuilder", "Netsuite", "Next Cloud", "Notion", "Okta", "OneDrive", "Osu", "Outreach", "PagerDuty", "Pandadoc", "Payfit", "PayPal", "Pendo", "Pennylane", "People Data Labs", "Personio", "Pingboard", "Pinterest", "Pipedrive", "Qualtrics", "QuickBooks", "Ramp", "Reddit", "Refiner", "Ring Central", "Sage", "Salesforce", "Salesloft", "Segment", "SendGrid", "ServiceM8", "ServiceNow", "Shopify", "Shortcut", "Slack", "Smartrecruiters", "Smartsheet", "SmugMug", "Snowflake", "Splitwise", "Spotify", "Squarespace", "SquareUp", "StackExchange", "Strava", "Stripe App", "Stripe Express", "Stripe", "Survey Monkey", "Teamtailor", "Teamwork", "TikTok Accounts", "TikTok Ads", "TikTok", "Timely", "Todoist", "Trello", "Twinfield", "Twitch", "Twitter", "Typeform", "Uber", "Wakatime", "Wave Accounting", "Whoop", "Wildix PBX", "Workable", "Xero", "Yahoo", "Yandex", "YouTube", "Zapier NLA", "Zendesk", "Zenefits", "Zoho Bigin", "Zoho Books", "Zoho CRM", "Zoho Desk", "Zoho Inventory", "Zoho Invoice", "Zoho Mail", "Zoom"
  ];

  return (
    <Select placeholder="Select an integration" size="lg" variant="filled">
      {integrations.map((integration, index) => (
        <option key={index} value={integration.toLowerCase().replace(/\s+/g, '-')}>
          {integration}
        </option>
      ))}
    </Select>
  );
};

export default Index;