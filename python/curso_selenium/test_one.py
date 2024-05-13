import time
from selenium import webdriver

browser = webdriver.Chrome()

browser.get("https://google.com")
browser.maximize_window()
time.sleep(3)

#browser.maximize_window()
#browser.close()
#browser.refresh()
#browser.back()
#browser.forward()
#browser.quit()
