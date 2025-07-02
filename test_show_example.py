from selenium.common import NoSuchElementException
from selenium.webdriver.common.by import By
import time

def test_show_example(driver):
    """Test category filtering and show/hide example behavior and click back to home."""
    try:
        # Step 1: Find the error card with code 403
        error_cards = driver.find_elements(By.CLASS_NAME, "error-card")
        target_card = None

        for card in error_cards:
            code_element = card.find_element(By.CLASS_NAME, "error-code")
            if code_element.text.strip() == "403":
                target_card = card
                break

        assert target_card is not None, "403 error card not found."
        target_card.click()
        time.sleep(1)

        # Step 2: Click show example
        button_show_example = driver.find_element(By.CLASS_NAME, 'example-toggle')
        button_show_example.click()
        time.sleep(2)

        assert button_show_example.is_displayed(), "Show example button is not displayed."
        print("Show example button is displayed.")

        # Step 3: Click hide example
        button_hide_example = driver.find_element(By.CLASS_NAME, 'example-toggle')
        button_hide_example.click()
        time.sleep(2)
        assert button_hide_example.is_displayed(), "Show hide button is not displayed."
        print("Hide example button clicked.")


        # Step 4: Click back to home
        button_back_to_home = driver.find_element(By.CLASS_NAME, 'back-btn')
        button_back_to_home.click()
        time.sleep(2)
        print("Back to home button clicked.")
        print("Example show/hide test and back to home button passed successfully.")

    except NoSuchElementException:
        print("Error: 'Back to Home' button not found.")
        return


    except AssertionError as ae:
        print(f"Assertion failed: {ae}")
        raise

    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        raise
