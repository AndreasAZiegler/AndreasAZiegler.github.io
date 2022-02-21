---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

  # Contact details (edit or remove options as required)
  email: andreas.ziegler@uni-tuebingen.de
  phone: +41 79 581 46 90
  address:
    street: Sand 1
    city: Tübingen
    #region: CA
    postcode: '72076'
    country: Germany
    country_code: DE
  coordinates:
    latitude: '48.5347'
    longitude: '9.0704'
  #directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
  #office_hours:
  #  - 'Monday 10:00 to 13:00'
  #  - 'Wednesday 09:00 to 10:00'
  #appointment_url: 'https://calendly.com'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM Me
      link: 'https://twitter.com/AndreasAZiegler'
    #- icon: skype
    #  icon_pack: fab
    #  name: Skype Me
    #  link: 'skype:echo123?call'
    #- icon: keybase
    #  icon_pack: fab
    #  name: Chat on Keybase
    #  link: 'https://keybase.io/'
    #- icon: comments
    #  icon_pack: fas
    #  name: Discuss on Forum
    #  link: 'https://discourse.gohugo.io'

design:
  columns: '2'
---
