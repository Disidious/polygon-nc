import datetime


class Logger:
    def log(content: str):
        logger = open("logs.txt", "a")
        logger.write(f"[{str(datetime.datetime.now())}]: {content}\n")
        logger.close()
