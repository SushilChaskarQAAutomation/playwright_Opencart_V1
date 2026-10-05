import { Page, Locator } from '@playwright/test';

export class ContactPage {

    contactTitle = "Contact Us";

    openContactPage() {
        console.log("Opening Contact Us page");
    }

    enterName(name: string) {
        console.log("Entering name: " + name);
    }

    enterEmail(email: string) {
        console.log("Entering email: " + email);
    }

    submitForm() {
        console.log("Submitting contact form");
    }
}
