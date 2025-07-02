from selenium.webdriver.common.by import By
import time

def test_category_filtering(driver):
    """Test category filtering."""
    try:
        client_error_button = None

        buttons = driver.find_elements(By.CLASS_NAME, "category-btn")
        for btn in buttons:
            if btn.text.strip() == "Client Error":
                client_error_button = btn
                client_error_button.click()
                break

        time.sleep(1)


        assert client_error_button is not None, "Client Error button was not found."
        assert client_error_button.is_displayed(), "Client Error button is not displayed after clicking."
        print("Category filtering test passed.")

    except Exception as e:
        print(f"An error occurred in test_category_filtering: {e}")
        raise
