import pyautogui
import time
time.sleep(10)
c=0
while c<=200:
    pyautogui.typewrite( "hello mawa" + str(c))
    pyautogui.press("enter")
    c+=1 