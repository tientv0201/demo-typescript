
Feature: Sign up successfully
    @test
    Scenario: Signup with email
    Given Open browser
    # When Go to Sign up page
    # And Sign up new user with email "<email>" and password "<password>"
    # Then Verify profile of new account

    Examples:
        | prefix_email  | domain_email  | password    | first_name | last_name |
        | pomelo-test   | @mailsac.com  | Pomelo123$  | FPo        | LPo       |