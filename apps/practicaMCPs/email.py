from django.core.mail import send_mail

def send_email_tool(from_email, to_email, subject, message):
    send_mail(
        subject,
        message,
        from_email,
        [to_email],
        fail_silently=False,
    )

    return {
        "status": "success",
        "from": from_email,
        "subject": subject,
        "message": f"Correo electronico enviado exitosamente a {to_email}"
    }