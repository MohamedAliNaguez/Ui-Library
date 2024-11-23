export const componentsMetadata = [
  {
    "name": "lib-an-other-button",
    "selector": "lib-an-other-button",
    "description": "A description for lib-an-other-button",
    "usage": "<lib-an-other-button></lib-an-other-button>",
    "code": "\n          <style>\n            .submit-btn {\n    background-color: #0e4d92; /* Marine blue */\n    color: #fff; /* White text */\n    font-size: 16px;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.2s ease;\n  }\n  \n  .submit-btn:hover {\n    background-color: #0c3b73; /* Darker blue on hover */\n    transform: scale(1.05);\n  }\n  \n  .submit-btn:active {\n    background-color: #092c57; /* Even darker blue on click */\n    transform: scale(1);\n  }\n  \n  .submit-btn:disabled {\n    background-color: #a6d0c2; /* Greyish green when disabled */\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n  \n          </style>\n          <button class=\"submit-btn\" type=\"submit\">\n    Submit\n  </button>\n  \n        ",
    "path": "buttons/an-other-button/an-other-button.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-pinkbutton",
    "selector": "lib-pinkbutton",
    "description": "A description for lib-pinkbutton",
    "usage": "<lib-pinkbutton></lib-pinkbutton>",
    "code": "\n          <style>\n            /* Style for the pink test button */\n.pink-btn {\n    background-color: #ff66b2;  /* Pink color */\n    color: white;\n    border: none;\n    padding: 15px 30px;\n    font-size: 16px;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.3s ease, transform 0.2s ease;\n  }\n  \n  /* Hover effect */\n  .pink-btn:hover {\n    background-color: #ff3385;  /* Slightly darker pink on hover */\n    transform: scale(1.1);  /* Button grows slightly when hovered */\n  }\n  \n  /* Active effect */\n  .pink-btn:active {\n    background-color: #ff1a66;  /* Even darker pink on click */\n  }\n  \n          </style>\n          <button class=\"pink-btn\">Test Button</button>\n\n        ",
    "path": "buttons/pinkbutton/pinkbutton.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-sw-button",
    "selector": "lib-sw-button",
    "description": "A description for lib-sw-button",
    "usage": "<lib-sw-button></lib-sw-button>",
    "code": "\n          <style>\n            .cancel-button {\n    background-color: #ff4d4d; /* Red color for cancel */\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    font-size: 16px;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n  \n  .cancel-button:hover {\n    background-color: #ff1a1a; /* Darker red on hover */\n  }\n  \n          </style>\n          <button class=\"cancel-button\">Cancel</button>\n\n        ",
    "path": "buttons/sw-button/sw-button.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-sw-close-button",
    "selector": "lib-sw-close-button",
    "description": "A description for lib-sw-close-button",
    "usage": "<lib-sw-close-button></lib-sw-close-button>",
    "code": "\n          <style>\n            .close-button {\n    background: transparent; /* No background color */\n    border: none; /* No border */\n    color: var(--text-color); /* Use your text color */\n    font-size: 1.5em; /* Adjust size of the close icon */\n    cursor: pointer; /* Pointer cursor on hover */\n    border-radius: 50%; /* Rounded shape */\n    width: 40px; /* Set button size */\n    height: 40px; /* Set button size */\n    display: flex; /* Flexbox for centering */\n    align-items: center; /* Center items vertically */\n    justify-content: center; /* Center items horizontally */\n    transition: background 0.3s, color 0.3s; /* Smooth transition */\n}\n\n.close-button:hover {\n    background: red; /* Slight background on hover */\n    color: var(--accent-color); /* Accent color on hover */\n}\n\n          </style>\n          <button class=\"close-button\" > \n    Close\n    &times; <!-- This represents the close icon (×) -->\n</button>\n\n        ",
    "path": "buttons/sw-close-button/sw-close-button.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-sw-primary-button",
    "selector": "lib-sw-primary-button",
    "description": "A description for lib-sw-primary-button",
    "usage": "<lib-sw-primary-button></lib-sw-primary-button>",
    "code": "\n          <style>\n            .btn {\n    padding: 10px 20px;\n    font-size: 16px;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .btn-primary {\n    background-color: #007bff;\n    color: white;\n  }\n  \n          </style>\n          \n  \n  <button class=\"btn btn-primary\"> Primary Button </button>\n  \n        ",
    "path": "buttons/sw-primary-button/sw-primary-button.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-sw-secondary-button",
    "selector": "lib-sw-secondary-button",
    "description": "A description for lib-sw-secondary-button",
    "usage": "<lib-sw-secondary-button></lib-sw-secondary-button>",
    "code": "\n          <style>\n            .btn-secondary {\n    background-color: #6c757d;\n    color: white;\n  }\n  \n          </style>\n          \n<button class=\"btn btn-secondary\">Secondary Button</button>\n\n        ",
    "path": "buttons/sw-secondary-button/sw-secondary-button.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-sw-success-button",
    "selector": "lib-sw-success-button",
    "description": "A description for lib-sw-success-button",
    "usage": "<lib-sw-success-button></lib-sw-success-button>",
    "code": "\n          <style>\n            .btn-success {\n    background-color: #28a745;\n    color: white;\n  }\n  \n          </style>\n          \n<button class=\"btn btn-success\">Success Button</button>\n\n        ",
    "path": "buttons/sw-success-button/sw-success-button.component.ts",
    "category": "buttons"
  },
  {
    "name": "lib-sw-centred-navbar",
    "selector": "lib-sw-centred-navbar",
    "description": "A description for lib-sw-centred-navbar",
    "usage": "<lib-sw-centred-navbar></lib-sw-centred-navbar>",
    "code": "\n          <style>\n            .navbar {\n    display: flex;\n    justify-content: center;\n    background-color: #444;\n    padding: 10px;\n  }\n  \n  .navbar-nav {\n    list-style: none;\n    display: flex;\n    gap: 20px;\n  }\n  \n  .nav-link {\n    color: white;\n    text-decoration: none;\n  }\n  \n          </style>\n          <nav class=\"navbar\">\n    <ul class=\"navbar-nav\">\n      <li><a href=\"#\" class=\"nav-link\">Home</a></li>\n      <li><a href=\"#\" class=\"nav-link\">Services</a></li>\n      <li><a href=\"#\" class=\"nav-link\">Portfolio</a></li>\n      <li><a href=\"#\" class=\"nav-link\">Contact</a></li>\n    </ul>\n  </nav>\n \n        ",
    "path": "navbars/sw-centred-navbar/sw-centred-navbar.component.ts",
    "category": "navbars"
  },
  {
    "name": "lib-sw-right-aligned-navbar",
    "selector": "lib-sw-right-aligned-navbar",
    "description": "A description for lib-sw-right-aligned-navbar",
    "usage": "<lib-sw-right-aligned-navbar></lib-sw-right-aligned-navbar>",
    "code": "\n          <style>\n            .navbar {\n    display: flex;\n    justify-content: space-between;\n    background-color: #555;\n    padding: 10px;\n  }\n  \n  .navbar-brand {\n    color: white;\n    text-decoration: none;\n  }\n  \n  .navbar-nav {\n    list-style: none;\n    display: flex;\n    gap: 15px;\n  }\n  \n  .nav-link {\n    color: white;\n    text-decoration: none;\n  }\n  \n          </style>\n          <nav class=\"navbar\">\n    <a href=\"#\" class=\"navbar-brand\">Brand</a>\n    <ul class=\"navbar-nav\">\n      <li><a href=\"#\" class=\"nav-link\">Home</a></li>\n      <li><a href=\"#\" class=\"nav-link\">Services</a></li>\n      <li><a href=\"#\" class=\"nav-link\">Contact</a></li>\n    </ul>\n  </nav>\n \n        ",
    "path": "navbars/sw-right-aligned-navbar/sw-right-aligned-navbar.component.ts",
    "category": "navbars"
  },
  {
    "name": "lib-sw-simple-navbar",
    "selector": "lib-sw-simple-navbar",
    "description": "A description for lib-sw-simple-navbar",
    "usage": "<lib-sw-simple-navbar></lib-sw-simple-navbar>",
    "code": "\n          <style>\n            .navbar {\n    display: flex;\n    justify-content: space-between;\n    background-color: #333;\n    padding: 10px;\n  }\n  \n  .navbar-brand {\n    color: white;\n    text-decoration: none;\n  }\n  \n  .navbar-nav {\n    list-style: none;\n    display: flex;\n    gap: 10px;\n  }\n  \n  .nav-link {\n    color: white;\n    text-decoration: none;\n  }\n  \n          </style>\n          <nav class=\"navbar\">\n    <a href=\"#\" class=\"navbar-brand\">Brand</a>\n    <ul class=\"navbar-nav\">\n      <li><a href=\"#\" class=\"nav-link\">Home</a></li>\n      <li><a href=\"#\" class=\"nav-link\">About</a></li>\n      <li><a href=\"#\" class=\"nav-link\">Contact</a></li>\n    </ul>\n  </nav>\n \n        ",
    "path": "navbars/sw-simple-navbar/sw-simple-navbar.component.ts",
    "category": "navbars"
  },
  {
    "name": "lib-sw-basic-dropdown-list",
    "selector": "lib-sw-basic-dropdown-list",
    "description": "A description for lib-sw-basic-dropdown-list",
    "usage": "<lib-sw-basic-dropdown-list></lib-sw-basic-dropdown-list>",
    "code": "\n          <style>\n            .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 10px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  .dropdown-content a:hover {\n    background-color: #f1f1f1;\n  }\n  \n  .dropdown:hover .dropdown-content {\n    display: block;\n  }\n  \n          </style>\n          \n<div class=\"dropdown\">\n    <button class=\"dropbtn\">Dropdown</button>\n    <div class=\"dropdown-content\">\n      <a href=\"#\">Link 1</a>\n      <a href=\"#\">Link 2</a>\n      <a href=\"#\">Link 3</a>\n    </div>\n  </div>\n  \n        ",
    "path": "drop-lists/sw-basic-dropdown-list/sw-basic-dropdown-list.component.ts",
    "category": "drop-lists"
  },
  {
    "name": "lib-sw-icons-dropdown-list",
    "selector": "lib-sw-icons-dropdown-list",
    "description": "A description for lib-sw-icons-dropdown-list",
    "usage": "<lib-sw-icons-dropdown-list></lib-sw-icons-dropdown-list>",
    "code": "\n          <style>\n            .dropbtn {\n    background-color: #e74c3c;\n    color: white;\n    padding: 14px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  .dropdown-content a {\n    padding: 14px 16px;\n    color: #e74c3c;\n  }\n  \n  .dropdown-content a i {\n    margin-right: 8px;\n  }\n  \n  .dropdown-content a:hover {\n    background-color: #f1c40f;\n  }\n  \n          </style>\n          <div class=\"dropdown\">\n    <button class=\"dropbtn\">Dropdown with Icons</button>\n    <div class=\"dropdown-content\">\n      <a href=\"#\"><i class=\"fa fa-home\"></i> Home</a>\n      <a href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n      <a href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a>\n    </div>\n  </div>\n \n        ",
    "path": "drop-lists/sw-icons-dropdown-list/sw-icons-dropdown-list.component.ts",
    "category": "drop-lists"
  },
  {
    "name": "lib-sw-styled-dropdown-list",
    "selector": "lib-sw-styled-dropdown-list",
    "description": "A description for lib-sw-styled-dropdown-list",
    "usage": "<lib-sw-styled-dropdown-list></lib-sw-styled-dropdown-list>",
    "code": "\n          <style>\n            .dropbtn {\n    background-color: #3498db;\n    color: white;\n    padding: 12px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  .dropdown-content a {\n    padding: 12px 16px;\n    color: #3498db;\n  }\n  \n  .dropdown-content a:hover {\n    background-color: #ddd;\n  }\n  \n          </style>\n          <div class=\"dropdown\">\n    <button class=\"dropbtn\">Styled Dropdown</button>\n    <div class=\"dropdown-content\">\n      <a href=\"#\">Option 1</a>\n      <a href=\"#\">Option 2</a>\n      <a href=\"#\">Option 3</a>\n    </div>\n  </div>\n  \n        ",
    "path": "drop-lists/sw-styled-dropdown-list/sw-styled-dropdown-list.component.ts",
    "category": "drop-lists"
  },
  {
    "name": "lib-sw-input-field-component",
    "selector": "lib-sw-input-field-component",
    "description": "A description for lib-sw-input-field-component",
    "usage": "<lib-sw-input-field-component></lib-sw-input-field-component>",
    "code": "\n          <style>\n            .input-field {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n  \n  .input-field:focus {\n    border-color: #007bff;\n    outline: none;\n  }\n  \n          </style>\n          <input type=\"text\" class=\"input-field\" [placeholder]=\"placeholder\">\n\n        ",
    "path": "forms/sw-input-field-component/sw-input-field-component.component.ts",
    "category": "forms"
  },
  {
    "name": "lib-sw-select-dropdown-component",
    "selector": "lib-sw-select-dropdown-component",
    "description": "A description for lib-sw-select-dropdown-component",
    "usage": "<lib-sw-select-dropdown-component></lib-sw-select-dropdown-component>",
    "code": "\n          <style>\n            .select-dropdown {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n    background-color: white;\n  }\n  \n  .select-dropdown:focus {\n    border-color: #007bff;\n    outline: none;\n  }\n  \n          </style>\n          <select class=\"select-dropdown\">\n    <ng-content></ng-content>\n  </select>\n \n        ",
    "path": "forms/sw-select-dropdown-component/sw-select-dropdown-component.component.ts",
    "category": "forms"
  },
  {
    "name": "lib-sw-text-area-component",
    "selector": "lib-sw-text-area-component",
    "description": "A description for lib-sw-text-area-component",
    "usage": "<lib-sw-text-area-component></lib-sw-text-area-component>",
    "code": "\n          <style>\n            .textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n    resize: vertical;\n  }\n  \n  .textarea:focus {\n    border-color: #007bff;\n    outline: none;\n  }\n  \n          </style>\n          <textarea class=\"textarea\" [placeholder]=\"placeholder\"></textarea>\n\n        ",
    "path": "forms/sw-text-area-component/sw-text-area-component.component.ts",
    "category": "forms"
  },
  {
    "name": "lib-sw-alert-box-component",
    "selector": "lib-sw-alert-box-component",
    "description": "A description for lib-sw-alert-box-component",
    "usage": "<lib-sw-alert-box-component></lib-sw-alert-box-component>",
    "code": "\n          <style>\n            .alert-box {\n    background-color: #f8d7da;\n    color: #721c24;\n    padding: 15px;\n    border: 1px solid #f5c6cb;\n    border-radius: 4px;\n    position: relative;\n    margin-bottom: 15px;\n  }\n  \n  .close-button {\n    background-color: #007bff;\n    color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 10px;\n  }\n  \n  .close-button:hover {\n    background-color: #0056b3;\n  }\n          </style>\n          <div class=\"alert-box\">\n    <p>{{ message }}</p>\n    <button class=\"close-button\" (click)=\"close()\">×</button>\n  </div>\n\n        ",
    "path": "modals/sw-alert-box-component/sw-alert-box-component.component.ts",
    "category": "modals"
  },
  {
    "name": "lib-sw-basic-modal-component",
    "selector": "lib-sw-basic-modal-component",
    "description": "A description for lib-sw-basic-modal-component",
    "usage": "<lib-sw-basic-modal-component></lib-sw-basic-modal-component>",
    "code": "\n          <style>\n            .modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .modal-content {\n    background-color: white;\n    padding: 20px;\n    border-radius: 4px;\n    width: 80%;\n    max-width: 600px;\n  }\n  \n  .close-button {\n    background-color: #007bff;\n    color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 10px;\n  }\n  \n  .close-button:hover {\n    background-color: #0056b3;\n  }\n  \n          </style>\n          <div class=\"modal-overlay\" *ngIf=\"isVisible\">\n    <div class=\"modal-content\">\n      <ng-content></ng-content>\n      <button class=\"close-button\" (click)=\"close()\">Close</button>\n    </div>\n  </div>\n \n        ",
    "path": "modals/sw-basic-modal-component/sw-basic-modal-component.component.ts",
    "category": "modals"
  },
  {
    "name": "lib-sw-confirmation-dialog-component",
    "selector": "lib-sw-confirmation-dialog-component",
    "description": "A description for lib-sw-confirmation-dialog-component",
    "usage": "<lib-sw-confirmation-dialog-component></lib-sw-confirmation-dialog-component>",
    "code": "\n          <style>\n            .dialog-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .dialog-content {\n    background-color: white;\n    padding: 20px;\n    border-radius: 4px;\n    width: 80%;\n    max-width: 500px;\n    text-align: center;\n  }\n  \n  .confirm-button, .cancel-button {\n    border: none;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  .confirm-button {\n    background-color: #28a745;\n    color: white;\n  }\n  \n  .confirm-button:hover {\n    background-color: #218838;\n  }\n  \n  .cancel-button {\n    background-color: #dc3545;\n    color: white;\n  }\n  \n  .cancel-button:hover {\n    background-color: #c82333;\n  }\n  \n          </style>\n          <div class=\"dialog-overlay\" *ngIf=\"isVisible\">\n    <div class=\"dialog-content\">\n      <p>{{ message }}</p>\n      <button class=\"confirm-button\" (click)=\"confirm()\">Confirm</button>\n      <button class=\"cancel-button\" (click)=\"cancel()\">Cancel</button>\n    </div>\n \n        ",
    "path": "modals/sw-confirmation-dialog-component/sw-confirmation-dialog-component.component.ts",
    "category": "modals"
  }
];