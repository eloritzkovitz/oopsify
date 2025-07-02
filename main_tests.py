# Python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
import time


from test_category_filtering import test_category_filtering
from test_main_page import test_main_page
from test_search import test_search
from test_show_example import test_show_example

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
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()),options=chrome_options)
    try:
        driver.get("http://localhost:5173") # localhost
        driver.maximize_window()
        time.sleep(2)
        test_function(driver)
    except Exception as e:
        print(f"{test_function.__name__} failed: {e}")
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

if __name__ == "__main__":
    main()