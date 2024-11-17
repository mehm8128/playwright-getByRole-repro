import test from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500/src/index.html");

	const textbox1 = page.getByRole("textbox", { name: "TestField1" });
	console.log("textbox1", await textbox1.count());
	await textbox1.click();
	const textbox2 = page.getByRole("textbox", { name: "TestField2" });
	console.log("textbox2", await textbox2.count());
	await textbox2.click();
});
