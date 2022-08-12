
Feature: Login successfully
    @test
    Scenario: Login with email
    Given Open browser and go to login
    When Do login with existing email "<email>" and "<password>"
    # And Sign up new user with email "<email>" and password "<password>"
    # Then Verify profile of new account

    Examples:
        | email                          | password      | first_name | last_name |
        | switch-mail-test@mailsac.com   | Catlinh@2020  | FPo        | LPo       |