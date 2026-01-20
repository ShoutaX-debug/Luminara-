import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:8080")

        # 1. Verify Accessibility Labels
        print("Verifying Accessibility Labels...")

        # Contact form inputs
        name_input = page.locator('input[name="name"]')
        assert name_input.get_attribute("aria-label") == "Nama Kamu", "Name input missing aria-label"

        email_input = page.locator('input[name="email"]')
        assert email_input.get_attribute("aria-label") == "Alamat Email", "Email input missing aria-label"

        msg_input = page.locator('textarea[name="message"]')
        assert msg_input.get_attribute("aria-label") == "Pesan", "Message input missing aria-label"

        # Subscribe button
        sub_btn = page.locator('.subscribe-form button')
        assert sub_btn.get_attribute("aria-label") == "Subscribe", "Subscribe button missing aria-label"

        # Social links
        social_links = page.locator('.footer-social a')
        count = social_links.count()
        assert count == 3
        for i in range(count):
            link = social_links.nth(i)
            label = link.get_attribute("aria-label")
            assert label in ["Instagram", "Facebook", "LinkedIn"], f"Unexpected aria-label: {label}"

        print("Accessibility Labels Verified.")

        # 2. Verify Contact Form Interaction
        print("Verifying Contact Form Interaction...")

        # Scroll to contact form to ensure visibility/interaction
        contact_section = page.locator('#contact')
        contact_section.scroll_into_view_if_needed()

        # Wait for potential AOS animation
        time.sleep(2)

        # Fill form
        name_input.fill("Test User")
        email_input.fill("test@example.com")
        msg_input.fill("This is a test message.")

        submit_btn = page.locator('.contact-form .btn-send')

        # Click submit
        submit_btn.click()

        # Check Loading State
        time.sleep(0.5)

        btn_text = submit_btn.inner_text()
        print(f"Button text during loading: {btn_text}")
        # The CSS has text-transform: uppercase, so we expect uppercase
        assert "MENGIRIM" in btn_text.upper(), f"Expected 'Mengirim...', got '{btn_text}'"

        # Wait for Success State (1.5s + buffer)
        time.sleep(1.6)

        btn_text_success = submit_btn.inner_text()
        print(f"Button text success: {btn_text_success}")
        assert "TERKIRIM" in btn_text_success.upper(), f"Expected 'Terkirim!', got '{btn_text_success}'"

        # Verify form reset
        assert name_input.input_value() == "", "Form Name should be reset"
        assert email_input.input_value() == "", "Form Email should be reset"

        # Wait for Reset State (2s + buffer)
        time.sleep(2.1)

        btn_text_reset = submit_btn.inner_text()
        print(f"Button text reset: {btn_text_reset}")
        assert "KIRIM PESAN" in btn_text_reset.upper(), f"Expected 'Kirim Pesan', got '{btn_text_reset}'"

        print("Contact Form Interaction Verified.")
        browser.close()

if __name__ == "__main__":
    run()
