from selenium.webdriver.common.by import By
import time

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