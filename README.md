# Background
Small repo to surface ClamAV virus definition versions distributed in DNS to HTTPS.

ClamAV ran into cost issues with orgs that didn't run mirrors and rate-limit their AV definition queries.  
The resolution was to publish that information through DNS with a a reasonable TTL.
Some orgs don't allow external DNS to come into their network, and may not allow DoH requests.  This repo serves to be a minimal shim that can run in firebase as
an inexpensive alternative.  Simply clone, log into your firebase account, and deploy.

There is a version running at https://us-central1-clamav-current-definitions.cloudfunctions.net/clamav.

# Future
While there is no future work planned, I'm open to suggestions.  Currently, ".answer.data" give the strin CVD uses to parse versions.
