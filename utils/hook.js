import {Builder} from 'selenium-webdriver';
import {Action} from './action';
import {before, after} from 'cucumber-tsflow';
import {BeforeAll, AfterAll, Before, Af} from 'cucumber';

const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

var chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");
const driver = new Builder().forBrowser('chrome').build();
const Action = new Action(driver);

