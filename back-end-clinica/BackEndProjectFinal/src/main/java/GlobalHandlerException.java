import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalHandlerException {

    private static final Logger logger = Logger.getLogger((GlobalHandlerException.class));

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> allError(Exception ex, WebRequest req){
        logger.error(ex.getMessage());

        return new ResponseEntity("Error"+ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

    }
}
