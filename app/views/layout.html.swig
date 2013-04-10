<!DOCTYPE html>
<html>
  <head>
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <h1>{{ title }}</h1>
    {% block content %}
    {% endblock %}
   {% if not user %}
	   <ul>
	   	<li><a href="/signup">Sign Up</a></li>
	   	<li><a href="/login">Log In</a></li>
	   </ul>
   {% else %}
		<p><a href="/logout">Logout</a></p>
   {% endif %}
  </body>
</html>