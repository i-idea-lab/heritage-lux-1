
from playwright.sync_api import sync_playwright

def verify_pages():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1440, "height": 900})

        routes = [
            {"name": "home", "url": "http://localhost:4173/"},
            {"name": "category_kurta", "url": "http://localhost:4173/category/kurta-sets"},
            {"name": "category_sherwani", "url": "http://localhost:4173/category/sherwanis"},
            {"name": "product", "url": "http://localhost:4173/product/1"},
        ]

        for route in routes:
            try:
                page.goto(route["url"])
                page.wait_for_timeout(2000)
                page.screenshot(path=f"verification/{route['name']}.png", full_page=True)
                print(f"Captured {route['name']}")
            except Exception as e:
                print(f"Failed to capture {route['name']}: {e}")

        browser.close()

if __name__ == "__main__":
    verify_pages()
