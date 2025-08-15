from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
import time

# ---------- Test Functions ----------

def test_main_page(driver):
    """Test the main page loads correctly."""
    time.sleep(2)
    print("Main page loaded successfully.")

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

def test_search(driver):
    """Test the search functionality."""
    try:
        search_bar = driver.find_element(By.CLASS_NAME, "error-search")
        search_bar.send_keys("404")
        time.sleep(1)

        assert search_bar.is_displayed(), "Search bar is not displayed."
        print("Search test passed.")
    except Exception as e:
        print(f"An error occurred in test_search_functionality: {e}")
        raise

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

# ---------- Test Runner ----------

chrome_options = Options()
options = [
    "--headless",
    "--disable-gpu",
    "--ignore-certificate-errors",
    "--window-size=1920,1080",
    "--no-sandbox",
    "--disable-dev-shm-usage",
]

for option in options:
    chrome_options.add_argument(option)

def run_test(test_function):
    """Run a single test with a fresh WebDriver instance."""
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)
    try:
        driver.get("http://localhost:80")
        driver.maximize_window()
        time.sleep(2)
        test_function(driver)
    except Exception as e:
        print(f"{test_function._name_} failed: {e}")
    finally:
        driver.quit()

def main():
    tests = [
        test_main_page,
        test_show_example,
        test_category_filtering,
        test_search,
    ]

    for test in tests:
        run_test(test)

if __name__ == "_main_":
    main()